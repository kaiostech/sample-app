include node_modules/fatigue-scripts/webapp.mk

BABEL_TAPE_RUNNER := $(BIN_DIR)/babel-tape-runner
TAP_NOTIFY := $(BIN_DIR)/tap-notify
FAUCET := $(BIN_DIR)/faucet

.PHONY: test
test:
	@$(BABEL_TAPE_RUNNER) test/**/*.test.js | $(TAP_NOTIFY) | $(FAUCET)
