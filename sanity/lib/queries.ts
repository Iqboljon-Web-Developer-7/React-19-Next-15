import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search] || _id == $id | order(_createdAt desc){
  _id, title, slug, _createdAt, 
    author -> {
      _id, name, image,username, bio
    },
     views, description, category, image
}`);
export const STARTUPS_SINGLE_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) &&  _id == $id][0]{
  _id, title, slug, _createdAt, 
    author -> {
      _id, name, image, bio
    },
     views, description, category, image, pitch
}`);
