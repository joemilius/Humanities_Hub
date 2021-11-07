# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_05_205339) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "activity_name"
    t.string "description"
    t.integer "votes"
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_activities_on_group_id"
  end

  create_table "book_comments", force: :cascade do |t|
    t.integer "stars"
    t.string "content"
    t.bigint "book_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_id"], name: "index_book_comments_on_book_id"
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "image"
    t.string "description"
    t.integer "likes"
    t.integer "dislikes"
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_books_on_group_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "group_name"
    t.boolean "public"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "invitations", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_invitations_on_group_id"
    t.index ["user_id"], name: "index_invitations_on_user_id"
  end

  create_table "memberships", force: :cascade do |t|
    t.boolean "admin"
    t.bigint "user_id", null: false
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_memberships_on_group_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "movie_comments", force: :cascade do |t|
    t.integer "stars"
    t.string "content"
    t.bigint "movie_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["movie_id"], name: "index_movie_comments_on_movie_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.integer "year"
    t.string "director"
    t.string "cast"
    t.string "description"
    t.integer "likes"
    t.integer "dislikes"
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_movies_on_group_id"
  end

  create_table "music_comments", force: :cascade do |t|
    t.integer "stars"
    t.string "content"
    t.bigint "music_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["music_id"], name: "index_music_comments_on_music_id"
  end

  create_table "musics", force: :cascade do |t|
    t.string "artist_name"
    t.string "image"
    t.string "description"
    t.integer "likes"
    t.integer "dislikes"
    t.bigint "group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_musics_on_group_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "activities", "groups"
  add_foreign_key "book_comments", "books"
  add_foreign_key "books", "groups"
  add_foreign_key "invitations", "groups"
  add_foreign_key "invitations", "users"
  add_foreign_key "memberships", "groups"
  add_foreign_key "memberships", "users"
  add_foreign_key "movie_comments", "movies"
  add_foreign_key "movies", "groups"
  add_foreign_key "music_comments", "musics"
  add_foreign_key "musics", "groups"
end
