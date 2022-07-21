package lone_test

import (
	"testing"

	keepertest "github.com/darxan/lone/testutil/keeper"
	"github.com/darxan/lone/testutil/nullify"
	"github.com/darxan/lone/x/lone"
	"github.com/darxan/lone/x/lone/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		WhoisList: []types.Whois{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		CtxList: []types.Ctx{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		CustomtxList: []types.Customtx{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LoneKeeper(t)
	lone.InitGenesis(ctx, *k, genesisState)
	got := lone.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.WhoisList, got.WhoisList)
	require.ElementsMatch(t, genesisState.CtxList, got.CtxList)
	require.ElementsMatch(t, genesisState.CustomtxList, got.CustomtxList)
	// this line is used by starport scaffolding # genesis/test/assert
}
