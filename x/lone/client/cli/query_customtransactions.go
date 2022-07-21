package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/darxan/lone/x/lone/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCustomtransactions() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "customtransactions",
		Short: "Query customtransactions",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryCustomtransactionsRequest{}

			res, err := queryClient.Customtransactions(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
