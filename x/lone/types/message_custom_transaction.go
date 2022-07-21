package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCustomTransaction = "custom_transaction"

var _ sdk.Msg = &MsgCustomTransaction{}

func NewMsgCustomTransaction(creator string, sender string, receiver string, amount string, feePercentage string, feeReceiver string, serviceName string) *MsgCustomTransaction {
	return &MsgCustomTransaction{
		Creator:       creator,
		Sender:        sender,
		Receiver:      receiver,
		Amount:        amount,
		FeePercentage: feePercentage,
		FeeReceiver:   feeReceiver,
		ServiceName:   serviceName,
	}
}

func (msg *MsgCustomTransaction) Route() string {
	return RouterKey
}

func (msg *MsgCustomTransaction) Type() string {
	return TypeMsgCustomTransaction
}

func (msg *MsgCustomTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCustomTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCustomTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
