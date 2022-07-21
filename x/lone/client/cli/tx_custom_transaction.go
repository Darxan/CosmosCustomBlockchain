package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/darxan/lone/x/lone/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCustomTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "custom-transaction [sender] [receiver] [amount] [fee-percentage] [fee-receiver] [service-name]",
		Short: "Broadcast message customTransaction",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argSender := args[0]
			argReceiver := args[1]
			argAmount := args[2]
			argFeePercentage := args[3]
			argFeeReceiver := args[4]
			argServiceName := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCustomTransaction(
				clientCtx.GetFromAddress().String(),
				argSender,
				argReceiver,
				argAmount,
				argFeePercentage,
				argFeeReceiver,
				argServiceName,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
