# Deployment

This site deploys as static files to the Hetzner server behind Caddy.

Deploy source:

```text
outputs/autoservis-janov-site-concept/
```

Remote connection:

```text
Host: root@204.168.158.92
Remote directory: /opt/deploy/autoservisjanov
Caddy directory: /opt/listmonk
```

Deploy:

```bash
./scripts/deploy-hetzner-static.sh
```

Optional settings:

```bash
export AUTOSERVIS_DEPLOY_HOST='root@204.168.158.92'
export AUTOSERVIS_DEPLOY_REMOTE_DIR='/opt/deploy/autoservisjanov'
export AUTOSERVIS_CADDY_DIR='/opt/listmonk'
```

Required DNS:

```text
autoservisjanov.cz      A   204.168.158.92
www.autoservisjanov.cz  A   204.168.158.92
autoservisjanov.cz      AAAA 2a01:4f9:c014:56c0::1
www.autoservisjanov.cz  AAAA 2a01:4f9:c014:56c0::1
```

Remove the old `167.235.121.166` A records and the old `2a01:4f8:1061:21da::2` AAAA records after the hosting migration. Caddy can issue the HTTPS certificate only after both hostnames resolve to the Hetzner server.
