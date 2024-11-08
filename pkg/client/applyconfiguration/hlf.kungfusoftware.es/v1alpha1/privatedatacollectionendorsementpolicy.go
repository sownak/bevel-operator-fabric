/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

// PrivateDataCollectionEndorsementPolicyApplyConfiguration represents a declarative configuration of the PrivateDataCollectionEndorsementPolicy type for use
// with apply.
type PrivateDataCollectionEndorsementPolicyApplyConfiguration struct {
	ChannelConfigPolicy *string `json:"channelConfigPolicy,omitempty"`
	SignaturePolicy     *string `json:"signaturePolicy,omitempty"`
}

// PrivateDataCollectionEndorsementPolicyApplyConfiguration constructs a declarative configuration of the PrivateDataCollectionEndorsementPolicy type for use with
// apply.
func PrivateDataCollectionEndorsementPolicy() *PrivateDataCollectionEndorsementPolicyApplyConfiguration {
	return &PrivateDataCollectionEndorsementPolicyApplyConfiguration{}
}

// WithChannelConfigPolicy sets the ChannelConfigPolicy field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the ChannelConfigPolicy field is set to the value of the last call.
func (b *PrivateDataCollectionEndorsementPolicyApplyConfiguration) WithChannelConfigPolicy(value string) *PrivateDataCollectionEndorsementPolicyApplyConfiguration {
	b.ChannelConfigPolicy = &value
	return b
}

// WithSignaturePolicy sets the SignaturePolicy field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the SignaturePolicy field is set to the value of the last call.
func (b *PrivateDataCollectionEndorsementPolicyApplyConfiguration) WithSignaturePolicy(value string) *PrivateDataCollectionEndorsementPolicyApplyConfiguration {
	b.SignaturePolicy = &value
	return b
}
