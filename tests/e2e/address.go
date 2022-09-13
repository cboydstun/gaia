package e2e

import (
	"math/rand"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/tendermint/crypto"
	"github.com/tendermint/tendermint/crypto/ed25519"
)

// PubKey returns a sample account PubKey
func PubKey() crypto.PubKey {
	seed := []byte(strconv.Itoa(rand.Int()))
	return ed25519.GenPrivKeyFromSecret(seed).PubKey()
}

// ConsAddress returns a sample consensus address
func ConsAddress() sdk.ConsAddress {
	return sdk.ConsAddress(PubKey().Address())
}

// AccAddress returns a sample account address
func AccAddress() sdk.AccAddress {
	addr := PubKey().Address()
	return sdk.AccAddress(addr)
}

// Address returns a sample string account address
func Address() string {
	return AccAddress().String()
}

// ValAddress returns a sample validator operator address
func ValAddress() sdk.ValAddress {
	return sdk.ValAddress(PubKey().Address())
}

// OperatorAddress returns a sample string validator operator address
func OperatorAddress() string {
	return ValAddress().String()
}
