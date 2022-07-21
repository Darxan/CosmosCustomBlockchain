package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/darxan/lone/x/lone/types"
)

func (k Keeper) AppendCustomTransaction(ctx sdk.Context, transaction types.CustomTransaction) uint64 {
	count := k.GetCustomTransactionCount(ctx)
	transaction.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CustomTransactionKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, transaction.Id)
	appendedValue := k.cdc.MustMarshal(&transaction)
	store.Set(byteKey, appendedValue)
	k.SetCustomTransactionCount(ctx, count+1)
	return count
}

func (k Keeper) GetCustomTransactionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CustomTransactionKey))
	byteKey := []byte(types.CustomTransactionCountKey)
	bz := store.Get(byteKey)
	if bz == nil {
		return 0
	}
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetCustomTransactionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CustomTransactionKey))
	byteKey := []byte(types.CustomTransactionKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}
