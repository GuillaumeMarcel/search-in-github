-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "node_id" TEXT NOT NULL,
    "gravatar_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "html_url" TEXT NOT NULL,
    "followers_url" TEXT NOT NULL,
    "following_url" TEXT NOT NULL,
    "gists_url" TEXT NOT NULL,
    "starred_url" TEXT NOT NULL,
    "subscriptions_url" TEXT NOT NULL,
    "organizations_url" TEXT NOT NULL,
    "repos_url" TEXT NOT NULL,
    "events_url" TEXT NOT NULL,
    "received_events_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "site_admin" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hireable" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "twitter_username" TEXT NOT NULL,
    "public_repos" INTEGER NOT NULL,
    "public_gists" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    PRIMARY KEY ("id_user")
);
