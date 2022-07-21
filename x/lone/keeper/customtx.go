package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/darxan/lone/x/lone/types"
)

// SetCustomtx set a specific customtx in the store from its index
func (k Keeper) SetCustomtx(ctx sdk.Context, customtx types.Customtx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomtxKeyPrefix))
	b := k.cdc.MustMarshal(&customtx)
	store.Set(types.CustomtxKey(
		customtx.Index,
	), b)
}

// GetCustomtx returns a customtx from its index
func (k Keeper) GetCustomtx(
	ctx sdk.Context,
	index string,

) (val types.Customtx, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomtxKeyPrefix))

	b := store.Get(types.CustomtxKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCustomtx removes a customtx from the store
func (k Keeper) RemoveCustomtx(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomtxKeyPrefix))
	store.Delete(types.CustomtxKey(
		index,
	))
}

// GetAllCustomtx returns all customtx
func (k Keeper) GetAllCustomtx(ctx sdk.Context) (list []types.Customtx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomtxKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Customtx
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
