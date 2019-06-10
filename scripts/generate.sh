#!/usr/bin/env bash

out_dir=${1}

mkdir ${out_dir}
ts-node ./scripts/ts-node/generate.ts ./node_modules/eva-icons/fill/svg ${out_dir}
ts-node ./scripts/ts-node/generate.ts ./node_modules/eva-icons/outline/svg ${out_dir}
ts-node ./scripts/ts-node/generateIndex.ts ${out_dir}
