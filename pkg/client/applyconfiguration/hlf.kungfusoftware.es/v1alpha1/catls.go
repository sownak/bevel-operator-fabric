/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

// CatlsApplyConfiguration represents a declarative configuration of the Catls type for use
// with apply.
type CatlsApplyConfiguration struct {
	Cacert    *string                           `json:"cacert,omitempty"`
	SecretRef *SecretRefNSKeyApplyConfiguration `json:"secretRef,omitempty"`
}

// CatlsApplyConfiguration constructs a declarative configuration of the Catls type for use with
// apply.
func Catls() *CatlsApplyConfiguration {
	return &CatlsApplyConfiguration{}
}

// WithCacert sets the Cacert field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Cacert field is set to the value of the last call.
func (b *CatlsApplyConfiguration) WithCacert(value string) *CatlsApplyConfiguration {
	b.Cacert = &value
	return b
}

// WithSecretRef sets the SecretRef field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the SecretRef field is set to the value of the last call.
func (b *CatlsApplyConfiguration) WithSecretRef(value *SecretRefNSKeyApplyConfiguration) *CatlsApplyConfiguration {
	b.SecretRef = value
	return b
}
