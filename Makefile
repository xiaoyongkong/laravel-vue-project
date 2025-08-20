.PHONY: install dev build serve test lint format clean cache setup

install: ## Instala todas as dependências (PHP e Node)
	composer install
	yarn install

setup: ## Configuração inicial do projeto
	cp .env.example .env
	php artisan key:generate
	php artisan migrate
	yarn build

dev: ## Inicia servidor de desenvolvimento
	yarn dev

serve: ## Inicia servidor Laravel
	php artisan serve

build: ## Compila assets para produção
	yarn build

test: ## Executa testes
	php artisan test

lint: ## Executa ESLint
	yarn lint

format: 
	yarn format

migrate: ## Executa migrations
	php artisan migrate

rollback: ## Reverte última migration
	php artisan migrate:rollback

fresh: ## Recria banco de dados
	php artisan migrate:fresh

seed: ## Executa seeders
	php artisan db:seed

tinker: ## Abre console interativo Laravel
	php artisan tinker

update: ## Atualiza dependências
	composer update
	yarn upgrade

production: ## Build completo para produção
	composer install --optimize-autoloader --no-dev
	yarn install --production
	yarn build
	php artisan config:cache
	php artisan route:cache
	php artisan view:cache