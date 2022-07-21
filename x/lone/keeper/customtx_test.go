package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/darxan/lone/testutil/keeper"
	"github.com/darxan/lone/testutil/nullify"
	"github.com/darxan/lone/x/lone/keeper"
	"github.com/darxan/lone/x/lone/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCustomtx(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Customtx {
	items := make([]types.Customtx, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCustomtx(ctx, items[i])
	}
	return items
}

func TestCustomtxGet(t *testing.T) {
	keeper, ctx := keepertest.LoneKeeper(t)
	items := createNCustomtx(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCustomtx(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCustomtxRemove(t *testing.T) {
	keeper, ctx := keepertest.LoneKeeper(t)
	items := createNCustomtx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCustomtx(ctx,
			item.Index,
		)
		_, found := keeper.GetCustomtx(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCustomtxGetAll(t *testing.T) {
	keeper, ctx := keepertest.LoneKeeper(t)
	items := createNCustomtx(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCustomtx(ctx)),
	)
}
