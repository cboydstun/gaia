package e2e

import (
	"cosmossdk.io/math"
	"encoding/json"
	"time"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	vestingPeriodFilePath = "test_period.json"
	vestingTxDelay        = 5
)

type (
	vestingPeriod struct {
		StartTime int64    `json:"start_time"`
		Periods   []period `json:"periods"`
	}
	period struct {
		Coins  string `json:"coins"`
		Length int64  `json:"length_seconds"`
	}
)

var (
	vestingAmountVested     = sdk.NewCoin(uatomDenom, math.NewInt(99900000000))
	vestingAmount           = sdk.NewCoin(uatomDenom, math.NewInt(350000))
	vestingBalance          = sdk.NewCoins(vestingAmountVested).Add(vestingAmount)
	vestingTransferAmount   = sdk.NewCoin(uatomDenom, sdk.NewInt(800000000))
	vestingDelegationAmount = sdk.NewCoin(uatomDenom, sdk.NewInt(500000000))
	vestingDelegationFees   = sdk.NewCoin(uatomDenom, sdk.NewInt(10))
)

func (s *IntegrationTestSuite) testDelayedVestingAccount(api, home string) {
	var (
		valIdx = 0
		chain  = s.chainA
		val    = chain.validators[valIdx]
	)
	sender, err := val.keyInfo.GetAddress()
	s.NoError(err)

	var (
		valOpAddr         = sdk.ValAddress(sender).String()
		vestingDelayedAcc = chain.delayedVestingAcc
	)
	s.Run("test delayed vesting genesis account", func() {
		acc, err := queryDelayedVestingAccount(api, vestingDelayedAcc.String())
		s.Require().NoError(err)

		//	Check address balance
		balance, err := getSpecificBalance(api, vestingDelayedAcc.String(), uatomDenom)
		s.Require().NoError(err)
		s.Require().Equal(vestingBalance.AmountOf(uatomDenom), balance.Amount)

		// Delegate coins should succeed
		s.executeDelegate(chain, valIdx, api, vestingDelegationAmount.String(), valOpAddr,
			vestingDelayedAcc.String(), home, vestingDelegationFees.String())

		// Validate delegation successful
		s.Require().Eventually(
			func() bool {
				res, err := queryDelegation(api, valOpAddr, vestingDelayedAcc.String())
				amt := res.GetDelegationResponse().GetDelegation().GetShares()
				s.Require().NoError(err)

				return amt.Equal(sdk.NewDecFromInt(vestingDelegationAmount.Amount))
			},
			20*time.Second,
			5*time.Second,
		)

		waitTime := acc.EndTime - time.Now().Unix()
		if waitTime > vestingTxDelay {
			//	Transfer coins should fail
			balance, err := getSpecificBalance(api, vestingDelayedAcc.String(), uatomDenom)
			s.Require().NoError(err)
			s.sendMsgSend(
				chain,
				valIdx,
				vestingDelayedAcc.String(),
				Address(),
				balance.Sub(fees).String(),
				fees.String(),
				true,
			)
			waitTime = acc.EndTime - time.Now().Unix() + vestingTxDelay
			time.Sleep(time.Duration(waitTime) * time.Second)
		}

		//	Transfer coins should succeed
		balance, err = getSpecificBalance(api, vestingDelayedAcc.String(), uatomDenom)
		s.Require().NoError(err)
		s.sendMsgSend(chain, valIdx, vestingDelayedAcc.String(), Address(), balance.Sub(fees).String(), fees.String(), false)
	})
}

func (s *IntegrationTestSuite) testContinuousVestingAccount(api, home string) {
	s.Run("test continuous vesting genesis account", func() {
		var (
			valIdx = 0
			chain  = s.chainA
			val    = chain.validators[valIdx]
		)
		sender, err := val.keyInfo.GetAddress()
		s.NoError(err)

		var (
			valOpAddr            = sdk.ValAddress(sender).String()
			continuousVestingAcc = chain.continuousVestingAcc
		)

		acc, err := queryContinuousVestingAccount(api, continuousVestingAcc.String())
		s.Require().NoError(err)

		//	Check address balance
		balance, err := getSpecificBalance(api, continuousVestingAcc.String(), uatomDenom)
		s.Require().NoError(err)
		s.Require().Equal(vestingBalance.AmountOf(uatomDenom), balance.Amount)

		// Delegate coins should succeed
		s.executeDelegate(chain, valIdx, api, vestingDelegationAmount.String(),
			valOpAddr, continuousVestingAcc.String(), home, vestingDelegationFees.String())

		// Validate delegation successful
		s.Require().Eventually(
			func() bool {
				res, err := queryDelegation(api, valOpAddr, continuousVestingAcc.String())
				amt := res.GetDelegationResponse().GetDelegation().GetShares()
				s.Require().NoError(err)

				return amt.Equal(sdk.NewDecFromInt(vestingDelegationAmount.Amount))
			},
			20*time.Second,
			5*time.Second,
		)

		waitStartTime := acc.StartTime - time.Now().Unix()
		if waitStartTime > vestingTxDelay {
			//	Transfer coins should fail
			balance, err := getSpecificBalance(api, continuousVestingAcc.String(), uatomDenom)
			s.Require().NoError(err)
			s.sendMsgSend(
				chain,
				valIdx,
				continuousVestingAcc.String(),
				Address(),
				balance.Sub(fees).String(),
				fees.String(),
				true,
			)
			waitStartTime = acc.StartTime - time.Now().Unix() + vestingTxDelay
			time.Sleep(time.Duration(waitStartTime) * time.Second)
		}

		waitEndTime := acc.EndTime - time.Now().Unix()
		if waitEndTime > vestingTxDelay {
			//	Transfer coins should fail
			balance, err := getSpecificBalance(api, continuousVestingAcc.String(), uatomDenom)
			s.Require().NoError(err)
			s.sendMsgSend(
				chain,
				valIdx,
				continuousVestingAcc.String(),
				Address(),
				balance.Sub(fees).String(),
				fees.String(),
				true,
			)
			waitEndTime = acc.EndTime - time.Now().Unix() + vestingTxDelay
			time.Sleep(time.Duration(waitEndTime) * time.Second)
		}

		//	Transfer coins should succeed
		balance, err = getSpecificBalance(api, continuousVestingAcc.String(), uatomDenom)
		s.Require().NoError(err)
		s.sendMsgSend(chain, valIdx, continuousVestingAcc.String(), Address(), balance.Sub(fees).String(), fees.String(), false)
	})
}

func (s *IntegrationTestSuite) testPermanentLockedAccount(api, home string) {
	s.Run("test permanent locked vesting genesis account", func() {
		var (
			valIdx = 0
			chain  = s.chainA
			val    = chain.validators[valIdx]
		)
		sender, err := val.keyInfo.GetAddress()
		s.NoError(err)
		valOpAddr := sdk.ValAddress(sender).String()
		permanentLockedAddr, err := createAccount(val.configDir(), "permanent_locked_vesting")
		s.Require().NoError(err)

		s.execCreatePermanentLockedAccount(chain, home, permanentLockedAddr,
			vestingAmountVested.String(), withKeyValue("from", sender.String()),
		)

		_, err = queryPermanentLockedAccount(api, permanentLockedAddr)
		s.Require().NoError(err)

		//	Check address balance
		balance, err := getSpecificBalance(api, permanentLockedAddr, uatomDenom)
		s.Require().NoError(err)
		s.Require().Equal(vestingAmountVested.Amount, balance.Amount)

		// Transfer coins to pay the delegation fee
		s.sendMsgSend(chain, valIdx, sender.String(), permanentLockedAddr,
			fees.String(), fees.String(), false)

		// Delegate coins should succeed
		s.executeDelegate(chain, valIdx, api, vestingDelegationAmount.String(), valOpAddr,
			permanentLockedAddr, home, vestingDelegationFees.String())

		// Validate delegation successful
		s.Require().Eventually(
			func() bool {
				res, err := queryDelegation(api, valOpAddr, permanentLockedAddr)
				amt := res.GetDelegationResponse().GetDelegation().GetShares()
				s.Require().NoError(err)

				return amt.Equal(sdk.NewDecFromInt(vestingDelegationAmount.Amount))
			},
			20*time.Second,
			5*time.Second,
		)

		//	Transfer coins should fail
		balance, err = getSpecificBalance(api, permanentLockedAddr, uatomDenom)
		s.Require().NoError(err)
		s.sendMsgSend(chain, valIdx, permanentLockedAddr, Address(),
			balance.Sub(fees).String(), fees.String(), true)
	})
}

func (s *IntegrationTestSuite) testPeriodicVestingAccount(api, home string) {
	s.Run("test periodic vesting genesis account", func() {
		var (
			valIdx = 0
			chain  = s.chainA
			val    = chain.validators[valIdx]
		)
		sender, err := val.keyInfo.GetAddress()
		s.NoError(err)
		valOpAddr := sdk.ValAddress(sender).String()

		periodicVestingAddr, err := createAccount(val.configDir(), "periodic_vesting")
		s.Require().NoError(err)

		s.execCreatePeriodicVestingAccount(
			chain,
			home,
			periodicVestingAddr,
			withKeyValue("from", sender.String()),
		)

		acc, err := queryPeriodicVestingAccount(api, periodicVestingAddr)
		s.Require().NoError(err)

		//	Check address balance
		balance, err := getSpecificBalance(api, periodicVestingAddr, uatomDenom)
		s.Require().NoError(err)

		expectedBalance := sdk.NewCoin(uatomDenom, sdk.NewInt(0))
		for _, period := range acc.VestingPeriods {
			_, coin := period.Amount.Find(uatomDenom)
			expectedBalance = expectedBalance.Add(coin)
		}
		s.Require().Equal(expectedBalance, balance)

		waitStartTime := acc.StartTime - time.Now().Unix()
		if waitStartTime > vestingTxDelay {
			//	Transfer coins should fail
			balance, err = getSpecificBalance(api, periodicVestingAddr, uatomDenom)
			s.Require().NoError(err)
			s.sendMsgSend(
				chain,
				valIdx,
				periodicVestingAddr,
				Address(),
				balance.Sub(fees).String(),
				fees.String(),
				true,
			)
			waitStartTime = acc.StartTime - time.Now().Unix() + vestingTxDelay
			time.Sleep(time.Duration(waitStartTime) * time.Second)
		}

		firstPeriod := acc.StartTime + acc.VestingPeriods[0].Length
		waitFirstPeriod := firstPeriod - time.Now().Unix()
		if waitFirstPeriod > vestingTxDelay {
			//	Transfer coins should fail
			balance, err = getSpecificBalance(api, periodicVestingAddr, uatomDenom)
			s.Require().NoError(err)
			s.sendMsgSend(
				chain,
				valIdx,
				periodicVestingAddr,
				Address(),
				balance.Sub(fees).String(),
				fees.String(),
				true,
			)
			waitFirstPeriod = firstPeriod - time.Now().Unix() + vestingTxDelay
			time.Sleep(time.Duration(waitFirstPeriod) * time.Second)
		}

		// Delegate coins should succeed
		s.executeDelegate(chain, valIdx, api, vestingDelegationAmount.String(), valOpAddr,
			periodicVestingAddr, home, vestingDelegationFees.String())

		// Validate delegation successful
		s.Require().Eventually(
			func() bool {
				res, err := queryDelegation(api, valOpAddr, periodicVestingAddr)
				amt := res.GetDelegationResponse().GetDelegation().GetShares()
				s.Require().NoError(err)

				return amt.Equal(sdk.NewDecFromInt(vestingDelegationAmount.Amount))
			},
			20*time.Second,
			5*time.Second,
		)

		//	Transfer coins should succeed
		balance, err = getSpecificBalance(api, periodicVestingAddr, uatomDenom)
		s.Require().NoError(err)
		s.sendMsgSend(
			chain,
			valIdx,
			periodicVestingAddr,
			Address(),
			balance.Sub(fees).String(),
			fees.String(),
			false,
		)

		secondPeriod := firstPeriod + acc.VestingPeriods[1].Length
		waitSecondPeriod := secondPeriod - time.Now().Unix()
		if waitSecondPeriod > vestingTxDelay {
			time.Sleep(time.Duration(waitSecondPeriod) * time.Second)

			//	Transfer coins should succeed
			balance, err = getSpecificBalance(api, periodicVestingAddr, uatomDenom)
			s.Require().NoError(err)
			s.sendMsgSend(
				chain,
				valIdx,
				periodicVestingAddr,
				Address(),
				balance.Sub(fees).String(),
				fees.String(),
				false,
			)
		}
	})
}

// createAccount create a random account into key store and return the address
func createAccount(configDir, name string) (string, error) {
	kb, err := keyring.New(keyringAppName, keyring.BackendTest, configDir, nil, cdc)
	if err != nil {
		return "", err
	}

	keyringAlgos, _ := kb.SupportedAlgorithms()
	algo, err := keyring.NewSigningAlgoFromString(string(hd.Secp256k1Type), keyringAlgos)
	if err != nil {
		return "", err
	}

	mnemonic, err := createMnemonic()
	if err != nil {
		return "", err
	}

	// Use the first wallet from the same mnemonic by HD path
	account, err := kb.NewAccount(name, mnemonic, "", HDPathZero, algo)
	if err != nil {
		return "", err
	}
	periodicVestingAddr, err := account.GetAddress()
	if err != nil {
		return "", err
	}
	return periodicVestingAddr.String(), nil
}

// generateVestingPeriod generate the vesting period file
func generateVestingPeriod() ([]byte, error) {
	p := vestingPeriod{
		StartTime: time.Now().Add(100 * time.Second).Unix(),
		Periods: []period{
			{
				Coins:  "850000000" + uatomDenom,
				Length: 35,
			},
			{
				Coins:  "2000000000" + uatomDenom,
				Length: 35,
			},
		},
	}
	return json.Marshal(p)
}
