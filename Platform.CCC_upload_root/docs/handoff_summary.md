# Platform.CCC — Manual Upload Handoff

Date: 2026-05-24  
Target repository: `ourcollectiveyourcollections/Platform.CCC`  
Upload method: manual GitHub upload or local git push.

## What this package contains

This package finalises the code-facing scaffold for **Create Your Collective / CCC**.

It includes:

- platform hierarchy documentation
- Drive folder mapping
- implementation plan
- Squarespace interface plan
- membership and permissions model
- automation plan
- legal/compliance guardrails
- JSON schemas
- JSON templates
- Google Apps Script scaffolds
- Python scripts
- dashboard widgets
- example records
- registry snapshot CSVs
- GitHub Actions validation workflow

## What has already been completed in Drive

The existing **Master Registry** Google Sheet was populated with:

- corrected CCC / DAYCC / DAWC / DAW.G / DAW.B hierarchy
- collection and sub-collection records
- member templates
- asset templates
- project templates
- contract templates
- royalty template
- contribution template
- mint queue template
- permission model
- Drive folder index
- glossary
- build log
- audit log

A live Google Sheets export was attempted but hit a Google API read quota limit. This package therefore includes registry snapshot CSVs generated from the populated scaffold logic.

## Upload instruction

Upload the contents of this folder to the root of:

`https://github.com/ourcollectiveyourcollections/Platform.CCC`

Recommended commit message:

`Initial Create Your Collective platform scaffold`
