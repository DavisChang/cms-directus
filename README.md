## Self-Hosting CMS Directus with NextJS

**[Learn more about Self-Hosting Quickstart](https://docs.directus.io/self-hosted/quickstart.html)**

**[Learn more about Directus](https://directus.io)** • **[Documentation](https://docs.directus.io)**

### Getting Started

Use docker compose run database, backend, and cache

```
$ docker-compose -f docker-compose-database.yml up

```

### Frontend

Use NextJS

```
$
```

### API

Update Setting Access Control or Admin Options Token

```
// set articles public
curl -i http://localhost:8055/items/articles"

// or use static token
curl -i http://localhost:8055/items/articles  -H "Authorization: Bearer RidPNVlEvBA70CkR--rc5-OBUM_0zcOs"

```

Use fields for related data

```
curl -i "http://localhost:8055/items/articles?fields=title,slug,image"

// wild card, a dot asterisk to fetch all the related image
curl -i "http://localhost:8055/items/articles?fields=title,slug,featured_image.*"
```

### Assets

1. Admin Image URL: http://localhost:8055/admin/files/4ae52e95-c462-471d-8782-41fb0f8f8f51
2. Public Image URL: http://localhost:8055/assets/4ae52e95-c462-471d-8782-41fb0f8f8f51
3. Transform Image URL: http://localhost:8055/assets/4ae52e95-c462-471d-8782-41fb0f8f8f51?width=400&fit=cover
