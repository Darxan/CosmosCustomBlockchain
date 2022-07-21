package keeper

import (
	"context"
	"github.com/darxan/lone/x/lone/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Customtransactions(goCtx context.Context, req *types.QueryCustomtransactionsRequest) (*types.QueryCustomtransactionsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var data []*types.CustomTransaction

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	customTransactionStore := prefix.NewStore(store, []byte(types.CustomTransactionKey))

	pageRes, err := query.Paginate(customTransactionStore, req.Pagination, func(key []byte, value []byte) error {
		var transaction types.CustomTransaction
		if err := k.cdc.Unmarshal(value, &transaction); err != nil {
			return err
		}
		data = append(data, &transaction)
		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryCustomtransactionsResponse{CustomTransaction: data, Pagination: pageRes}, nil
}
