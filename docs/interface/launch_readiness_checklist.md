# Launch Readiness Checklist

Repository: `NCNBOUWER/Platform.CCC`  
Scope: Create Your Collective / CCC  
Status: pre-launch scaffold

## Purpose

Define the minimum checks required before Platform.CCC is presented through a public or member-facing interface.

## Launch status levels

| Level | Meaning |
|---|---|
| L0 Draft | Internal-only; incomplete scaffold. |
| L1 Alpha | Root repo coherent; no public claims; widgets static or mock. |
| L2 Private Beta | Member login available; dashboard reads approved test data. |
| L3 Public Preview | Public pages live; no live token claims; read-only demo data. |
| L4 Testnet Candidate | Metadata and mint packs validated; Ethereum testnet only. |
| L5 Live Candidate | Legal, tax, privacy, security and wallet review complete. |

Current level: **L1 Alpha in progress**.

## Repository checks

- [ ] Root README is complete.
- [ ] Failed ZIP files are absent.
- [ ] `Platform.CCC_upload_root/` has been promoted or retired.
- [ ] Source-of-truth register is complete.
- [ ] Repo/Drive sync rules are complete.
- [ ] Unresolved blockers are current.
- [ ] GitHub Actions validation passes.
- [ ] Schemas are complete for core records.
- [ ] Templates align with schemas.

## Registry checks

- [ ] Master Registry tabs exist.
- [ ] Registry CSV snapshots exist.
- [ ] Sensitive data is excluded from public exports.
- [ ] Field names align with schemas.
- [ ] Audit log is current.
- [ ] Mint queue is marked review-gated.

## Drive checks

- [ ] Platform folder IDs confirmed.
- [ ] CCC library folder IDs confirmed.
- [ ] Member folder template confirmed.
- [ ] Shared layer folders confirmed.
- [ ] Build/mint folders confirmed.
- [ ] Private folders are not exposed publicly.

## Interface checks

- [ ] Squarespace public page map complete.
- [ ] Member login flow drafted.
- [ ] Dashboard widgets tested with safe JSON.
- [ ] Public/private field allowlist exists.
- [ ] Static fallback pages exist.
- [ ] Public pages avoid financial-product wording.

## Compliance checks

- [ ] No guaranteed return language.
- [ ] No dividend entitlement language.
- [ ] No securities framing.
- [ ] No tax-advantage claims.
- [ ] No unreviewed royalty enforcement claims.
- [ ] No member private data exposed.
- [ ] Legal/tax review marked as blocker for live commercial token use.

## Ethereum/testnet checks

- [ ] No private keys in repo.
- [ ] No seed phrases in repo.
- [ ] Metadata validates.
- [ ] File manifest exists.
- [ ] Royalty split is internal/accounting-only until review.
- [ ] Testnet is separated from live minting.

## Launch blockers

Any of the following blocks launch beyond L1:

- public/private data boundary unresolved
- dashboard endpoint exposes raw sheets or raw Drive folders
- Drive IDs or permissions unconfirmed
- financial/tax claims not reviewed
- metadata validation failing
- root/staging parity unresolved

## Immediate next launch action

Move toward L2 by completing:

1. root parity pass
2. schema/template completion
3. dashboard export allowlist
4. static dashboard JSON test file
5. Squarespace page slug map
