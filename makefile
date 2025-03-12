# Common variables
CDK_REGION = us-east-1
GITHUB_OWNER = scoopnewsgroup
GITHUB_REPO = upgather-gatsby-and-cms

# Environment-specific variables
ifeq ("$(ENV)", "")
.DEFAULT_GOAL := help
else ifeq ("$(ENV)", "prod")
AWS_PROFILE = upgather-prod
AWS_ACCOUNT_ID = 074810402395
HOSTED_ZONE_ID = Z05006551LK60JZQR1Z43
HOSTED_ZONE_NAME = prod.upgather.com
OPEN_ID_CONNECT_PROVIDER_ARN = arn:aws:iam::074810402395:oidc-provider/token.actions.githubusercontent.com
RESPONSE_HEADERS_POLICY_ID = 1d08eff0-a9b2-4683-bc48-54c473b7c532
else ifeq ("$(ENV)", "dev")
AWS_PROFILE = upgather-dev
AWS_ACCOUNT_ID = 070320755996
HOSTED_ZONE_ID = Z1044790OX3A9FCKFNFY
HOSTED_ZONE_NAME = dev.upgather.com
OPEN_ID_CONNECT_PROVIDER_ARN = arn:aws:iam::070320755996:oidc-provider/token.actions.githubusercontent.com
RESPONSE_HEADERS_POLICY_ID = 3247cba4-3c81-4299-aeb8-39317ce255ae
else
AWS_ACCOUNT_ID = 070320755996
HOSTED_ZONE_ID = Z1044790OX3A9FCKFNFY
HOSTED_ZONE_NAME = dev.upgather.com
APP_PREFIX = $(ENV)
OPEN_ID_CONNECT_PROVIDER_ARN = arn:aws:iam::070320755996:oidc-provider/token.actions.githubusercontent.com
RESPONSE_HEADERS_POLICY_ID = 3247cba4-3c81-4299-aeb8-39317ce255ae
endif

# Export all variables
.EXPORT_ALL_VARIABLES:

# Phony targets
.PHONY: help deploy synth check-env deploy-all deploy-github-oidc deploy-static-website synth-all synth-github-oidc synth-static-website github-deploy github-destroy

# Help target
help:
	@echo "Usage: make [TARGET] ENV=[dev|preprod|prod]"
	@echo ""
	@echo "Targets:"
	@echo "  deploy-all    Deploy to AWS"
	@echo "-----------------------------"  # Separator line
	@echo "  github-deploy    Deploy only the SpaStack"
	@echo "  github-destroy    Destroy only the SpaStack"
	@echo "  deploy-github-oidc    Deploy only the GitHubOIDCRoleStack"
	@echo "  deploy-static-website    Deploy only the SpaStack"
	@echo "  synth-all     Synthesize CloudFormation template for all stacks"
	@echo "  synth-github-oidc     Synthesize CloudFormation template for the GitHubOIDCRoleStack"
	@echo "  synth-static-website     Synthesize CloudFormation template for the SpaStack"


# CDK deploy for use with GitHub Actions.
# No profile set because workflow will assume the role provided by GitHub Actions.
github-deploy: check-env
	pnpm dlx aws-cdk deploy $(APP_PREFIX)-static-website-stack --require-approval never

# CDK destroy for use with GitHub Actions.
# No profile set because workflow will assume the role provided by GitHub Actions.
github-destroy: check-env
	-pnpm dlx aws-cdk destroy $(APP_PREFIX)-static-website-stack --force

# CDK deploy target
deploy-all: check-env
	pnpm dlx aws-cdk deploy --profile $(AWS_PROFILE) --all

# Deploy only the GitHubOIDCRoleStack
deploy-github-oidc: check-env
	pnpm dlx aws-cdk deploy gatsby-github-oidc-role-stack --profile $(AWS_PROFILE)

# Deploy only the SpaStack
deploy-static-website: check-env
	pnpm dlx aws-cdk deploy $(APP_PREFIX)-static-website-stack --profile $(AWS_PROFILE)

# CDK synth target
synth-all: check-env
	CDK_SYNTH=true pnpm dlx aws-cdk synth --profile $(AWS_PROFILE)

# CDK synth target
synth-github-oidc: check-env
	CDK_SYNTH=true pnpm dlx aws-cdk synth $(APP_PREFIX)-github-oidc-role-stack --profile $(AWS_PROFILE)

# CDK synth target
synth-static-website: check-env
	CDK_SYNTH=true pnpm dlx aws-cdk synth $(APP_PREFIX)-static-website-stack --profile $(AWS_PROFILE)


# Check environment target
check-env:
ifeq ("$(ENV)", "")
	@$(MAKE) help
	@echo "Error: ENV is not set. Please set ENV and try again."
	@exit 1
endif