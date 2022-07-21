package types_test

import (
	"testing"

	"github.com/darxan/lone/x/lone/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated whois",
			genState: &types.GenesisState{
				WhoisList: []types.Whois{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated ctx",
			genState: &types.GenesisState{
				CtxList: []types.Ctx{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated customtx",
			genState: &types.GenesisState{
				CustomtxList: []types.Customtx{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
