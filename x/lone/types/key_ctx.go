package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CtxKeyPrefix is the prefix to retrieve all Ctx
	CtxKeyPrefix = "Ctx/value/"
)

// CtxKey returns the store key to retrieve a Ctx from the index fields
func CtxKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
