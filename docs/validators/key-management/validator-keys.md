---
id: validator-keys
title: Validator Keys
---

A file containing the keys for your node.

The **Validator Keys** are located in the `validatorKey.pem` file, which is generated in the node setup process. By default, each node stores its own .pem file in the `$HOME/elrond-nodes/node-0` folder. A copy also archived as a zip file in the `$HOME/VALIDATOR_KEYS` folder, for restore purposes.

Below you can find their anatomy and how to extract the information from them

Example:

-----BEGIN PRIVATE KEY for *45e7131ba37e05c5de3f8862b4d8294812f004a5b660abb793e89b65816dbff2b02f54c25f139359c9c98be0fa657d0bf1ae4115dcf6fdbf5f3a470f1d251f769610b48fe34eeab59e82ac1cc0336d1d9109a14b768b97ccb4db4c2431629688*-----

**YmRiNmViOGYzMmQ3OWY0YjE4ODJjMzE1ODA4YjQyZmZjODhiZDQxNzMwNmE5MTRiZjQ4OTAyNjM0MTcyNjMzMw==** 

-----END PRIVATE KEY for *45e7131ba37e05c5de3f8862b4d8294812f004a5b660abb793e89b65816dbff2b02f54c25f139359c9c98be0fa657d0bf1ae4115dcf6fdbf5f3a470f1d251f769610b48fe34eeab59e82ac1cc0336d1d9109a14b768b97ccb4db4c2431629688*-----

In plain English: 

```
-----The private key for this``*PUBLIC KEY*``starts below----- 
**PRIVATE KEY** 
-----The private key for this``*PUBLIC KEY*``was listed above----- 
```

The string in *italics* from the example is the *PUBLIC KEY*. The string in **bold** from the example is the **PRIVATE KEY**.

More clearly:

`*PUBLIC KEY:* `*45e7131ba37e05c5de3f8862b4d8294812f004a5b660abb793e89b65816dbff2b02f54c25f139359c9c98be0fa657d0bf1ae4115dcf6fdbf5f3a470f1d251f769610b48fe34eeab59e82ac1cc0336d1d9109a14b768b97ccb4db4c2431629688*

`**PRIVATE KEY:**`**YmRiNmViOGYzMmQ3OWY0YjE4ODJjMzE1ODA4YjQyZmZjODhiZDQxNzMwNmE5MTRiZjQ4OTAyNjM0MTcyNjMzMw==**

Always save and protect **private keys**, they are like your username + password + 2FA at your bank, all combined.

*Public keys* are like your phone number - no harm in others knowing it, it actually is needed for some scenarios. Still, only share it on a need to basis, like you would do with your own phone number.