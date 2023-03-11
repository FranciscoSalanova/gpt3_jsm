import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import.js'

const blogData = [
  {
    'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    'date': 'Sep 26, 2021',
    'imgUrl': blog02
  },
  {
    'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    'date': 'Sep 26, 2021',
    'imgUrl': blog03
  },
  {
    'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    'date': 'Sep 26, 2021',
    'imgUrl': blog04
  },
  {
    'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    'date': 'Sep 26, 2021',
    'imgUrl': blog05
  }
]

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
        </div>
        <div className='gpt3__blog-container_groupB'>
        {
          blogData.map((article, index) => 
            <Article imgUrl={article.imgUrl} title={article.title} date={article.date} key={article.title + index} />
          )
        }
        </div>
      </div>
    </div>
  )
}

export default Blog