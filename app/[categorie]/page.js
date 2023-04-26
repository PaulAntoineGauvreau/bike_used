"use client";
// import {useEffect} from 'react'
// import {use} from 'react'
// import { getBikeCategories } from '../api/hello/route'
import { useState, useEffect } from 'react'

export default function CategorieDetail({params}) {
    const [data, setData] = useState([])


    useEffect(() => {
        app(params)
    }, [params])


        // console.log(params.categorie)
        const Cosmic = require('cosmicjs')
        const api = Cosmic()
        const bucket = api.bucket({
            slug: 'paul-antoine-test-bike-used',
            read_key: 'wNeMWc1PaiRhCyM4qSVFqTLiuCxu0ZJPFBtNlCv0OIM0eh1iIt'
        })

       const app = async (params) => {
        const data = await bucket.objects.find({
            type: 'bikes',
            // 'metadata.categorioso' : "gravel"
            }).props('slug,title,content,metadata')
            const bikes = data.objects
            console.log(JSON.stringify(bikes[0].metadata, null, 2))
       }

    return (
      
      <main>
        {/* {console.log(bikes)} */}
        <h2>{params.categorie}</h2>
      </main>
    )
  }