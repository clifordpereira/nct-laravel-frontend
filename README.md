# Nuxt Laravel Frontend

This repository provides the frontend implementation for the Nuxt-Laravel integration ecosystem, powered by `nuxt-crud-table` (NCT).

> **Prerequisite Note:** This repository handles the UI layer only. To make this application functional, you **must** also set up and run the backend service. If you haven't done so already, please navigate to [nuxt-laravel-backend](https://www.google.com/search?q=https://github.com/your-username/nuxt-laravel-backend) to configure your server API before proceeding.

---

## Installation & Setup

### Quick Install
```bash
nuxi init -t gh:Clifland/nct-laravel-frontend <your-app-name>
```

### Nuxt Configuration

Add nuxt-crud-table module in nuxt.config.ts.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui', 
    'nuxt-crud-table'
  ]
})

```
### Environment Configuration

Create a `.env` file in the root directory of this project and specify your local Laravel API endpoint:

```env
NUXT_PUBLIC_CRUD_TABLE_API_BASE=http://localhost:8000/api

```

### Run the App
Open the app with your IDE and run `bun dev` to start the development server.

---

## Usage & Interface Operations

Once your Laravel server is up and running on port `8000`, navigate directly to your resource routes to view the dynamic dashboard:
`http://localhost:3000/resource/products`

### UI Controls

* **Creating Records:** Use the Action button located in the **top-right corner** of the view layout to append a new resource object.
* **Row Interactions:** On the right-hand side of every single data row, click the ellipsis (**`...`**) context action menu to trigger viewing, editing, or deleting operations.
* **Data Pipelines:** The tabular data view supports live searching and structural pagination out of the box. *Note: Data filtration and pagination calculations are currently computed via client-side JavaScript.*

---

## Development Status

> [!NOTE]
> `nuxt-crud-table` (NCT) is currently under active structural development. Frequent updates, optimizations, and upstream core module changes are to be expected.