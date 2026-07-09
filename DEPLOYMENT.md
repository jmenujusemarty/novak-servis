# Deployment

This site deploys over SFTP to Thinline.

Deploy source:

```text
outputs/autoservis-janov-site-concept/
```

Remote connection:

```text
Host: replikant3617.thinline.cz
SFTP port: 2295
User: autoservisjanov_cz
```

The password is intentionally not stored in this repository. Set it only in the current shell before deploying:

```bash
export AUTOSERVIS_DEPLOY_PASSWORD='your-password'
./scripts/deploy-sftp.sh
```

Optional settings:

```bash
export AUTOSERVIS_DEPLOY_REMOTE_DIR='.'
export AUTOSERVIS_DEPLOY_DELETE=1
```

Use `AUTOSERVIS_DEPLOY_DELETE=1` only when the remote directory is confirmed to contain only this website.
