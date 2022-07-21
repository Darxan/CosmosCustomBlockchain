package keeper_test

import (
	"testing"

	testkeeper "github.com/darxan/lone/testutil/keeper"
	"github.com/darxan/lone/x/lone/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.LoneKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
