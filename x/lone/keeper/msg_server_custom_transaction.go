package keeper

// import "fmt"
// "github.com/darxan/lone/x/lone/types"
// sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/darxan/lone/x/lone/types"
)

func (k msgServer) CustomTransaction(goCtx context.Context, msg *types.MsgCustomTransaction) (*types.MsgCustomTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	creator, _ := sdk.AccAddressFromBech32(msg.Creator)
	sender, _ := sdk.AccAddressFromBech32(msg.Sender)
	receiver, _ := sdk.AccAddressFromBech32(msg.Receiver)
	amount, _ := sdk.ParseCoinsNormalized(msg.Amount)
	feeReceiver, _ := sdk.AccAddressFromBech32(msg.FeeReceiver)

	k.bankKeeper.SendCoins(ctx, creator, receiver, amount)
	
	newCustomtx := types.Customtx {
		Creator:       creator.String(),
		Sender:        sender.String(),
		Receiver:      receiver.String(),
		Amount:        amount.String(),
		FeePercentage: msg.FeePercentage,
		FeeReceiver:   feeReceiver.String(),
		ServieName:   msg.ServiceName,
	} 
	
	var newData = types.CustomTransaction {
		Creator:       creator.String(),
		Sender:        sender.String(),
		Receiver:      receiver.String(),
		Amount:        amount.String(),
		FeePercentage: msg.FeePercentage,
		FeeReceiver:   feeReceiver.String(),
		ServiceName:   msg.ServiceName,
	}

	id := k.AppendCustomTransaction(ctx, newData)
	k.SetCustomtx(ctx, newCustomtx)
	return &types.MsgCustomTransactionResponse{Id: id}, nil
}
