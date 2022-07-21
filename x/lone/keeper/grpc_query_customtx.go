package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/darxan/lone/x/lone/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CustomtxAll(c context.Context, req *types.QueryAllCustomtxRequest) (*types.QueryAllCustomtxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var customtxs []types.Customtx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	customtxStore := prefix.NewStore(store, types.KeyPrefix(types.CustomtxKeyPrefix))

	pageRes, err := query.Paginate(customtxStore, req.Pagination, func(key []byte, value []byte) error {
		var customtx types.Customtx
		if err := k.cdc.Unmarshal(value, &customtx); err != nil {
			return err
		}

		customtxs = append(customtxs, customtx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCustomtxResponse{Customtx: customtxs, Pagination: pageRes}, nil
}

func (k Keeper) Customtx(c context.Context, req *types.QueryGetCustomtxRequest) (*types.QueryGetCustomtxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCustomtx(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCustomtxResponse{Customtx: val}, nil
}
