package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CustomtxKeyPrefix is the prefix to retrieve all Customtx
	CustomtxKeyPrefix = "Customtx/value/"
)

// CustomtxKey returns the store key to retrieve a Customtx from the index fields
func CustomtxKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
