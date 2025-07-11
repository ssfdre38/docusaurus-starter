---
sidebar_position: 9
---

# Nginx SSL Proxy Supprt

Nginx SSL Proxy Support

:::note

This is how to setup an SSL proxy using Nginx for AMP

:::

## Installing Nginx

:::note

With Let's Encrypted and CertBot, you can now SSL IP Address as well.

:::

You should be able to run the AMP SSL Setup command after you install AMP
```bash
sudo su -l
getamp postSetupHTTPS
```
And this will give you the option for the SSL Setup

If you do not want to use the getamp setup, then look at your linux distro repo docs for installing nginx

## Setting up the configuration file for reverse ssl proxy

