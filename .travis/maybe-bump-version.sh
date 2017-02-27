#!/bin/bash

if [ "$EMBER_TRY_SCENARIO" != "default" ]
then
  echo "Skipping version bump for EMBER_TRY_SCENARIO ${EMBER_TRY_SCENARIO}"
  exit 0
fi

$(npm root -g)/pr-bumper/.travis/maybe-bump-version.sh
