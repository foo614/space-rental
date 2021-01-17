import React from 'react';
import { Avatar } from 'antd';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'SpaceRental.com',
    link: 'home',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item1',
        className: 'header0-item',
        isAuth: false,
        children: {
          href: '/',
          children: [{ children: 'Home', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        isAuth: false,
        children: {
          href: '/login',
          children: [{ children: 'Log In', name: 'text' }],
        },
      },
      {
        name: 'item5',
        className: 'header0-item',
        isAuth: true,
        children: {
          href: '/profile',
          children: [{ children: <Avatar icon={<UserOutlined />} />, name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: '/profile',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children: <UserOutlined style={{ marginLeft: '10px' }} />,
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: localStorage.getItem('username'),
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: '/logout',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children: <LogoutOutlined style={{ marginLeft: '10px' }} />,
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Logout',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'Welcome to Space Rental',
  },
  content: {
    className: 'banner0-content mt10-xs',
    children:
      'Find storage or parking spaces for 50% less than self storage units',
  },
  button: { className: 'banner0-button', children: 'Start Exploring' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'World-class protection with neighborly trust',
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '$1M Host Guarantee',
            },
            {
              name: 'content',
              children:
                'Protects you for up to $1M for personal liability. Your safety is important. Its important to us too.',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'RM25,000 Renter Guarantee',
            },
            {
              name: 'content',
              children:
                'Wow. Even we cant believe we are offering this for free! Your items are safe with us.',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Secure, Automatic Payments',
            },
            {
              name: 'content',
              children:
                'Neighbor uses the same payment processor as Amazon, Facebook, and Uber. Its simple, easy, and safe. And did we mention 256-bit encryption?',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: 'Storage Types' },
  content: {
    className: 'content1-content',
    children: [
      {
        link: '/#',
        label: 'Self Storage',
      },
      {
        link: '/#',
        label: 'Climate Controlled Storage',
      },
      {
        link: '/#',
        label: 'Long Term Storage',
      },
      {
        link: '/#',
        label: 'Long Term Parking',
      },
      {
        link: '/#',
        label: 'Business Storage',
      },
      {
        link: '/#',
        label: 'Car Storage',
      },
      {
        link: '/#',
        label: 'Parking Storage',
      },
      {
        link: '/#',
        label: 'Warehouse Storage',
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Why choose us?',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children:
          'Neighbor helps hosts set fair terms and renters find friendly spaces',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Space' },
          content: {
            className: 'content3-content',
            children: 'Secure, empty unit that’s ready to share.',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Payment' },
          content: {
            className: 'content3-content',
            children: 'Less than pay for storage units.',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Access' },
          content: {
            className: 'content3-content',
            children: 'Here when you can come by.',
          },
        },
      },
    ],
  },
};
export const Footer01DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020
        {' '}
        <a href="https://motion.ant.design">SpaceRental.com</a>
        {' '}
        All Rights
        Reserved
      </span>
    ),
  },
  footerMenu: [
    {
      title: 'SpaceRental.com',
      children: [
        { title: 'Storage Near Me', link: '/#' },
        { title: 'List Your Space', link: '/#' },
        { title: 'Trust & Safety', link: '/#' },
        { title: 'FAQs', link: '#' },
      ],
    },
    {
      title: 'Storage Types',
      children: [
        { title: 'Self Storage', link: '/#' },
        { title: 'Car Storage', link: '/#' },
        { title: 'Business Storage', link: '/#' },
      ],
    },
    {
      title: 'Contact Us',
      children: [
        {
          title: 'Johor Bahru - 011-8485521',
        },
      ],
    },
    {
      title: 'Join Our Community',
      children: [
        { title: 'Facebook', desc: 'Space-Rental', link: '/#' },
        {
          title: 'Instagram',
          desc: 'SpaceRental.com',
          link: '/#',
        },
      ],
    },
  ],
};

export const Locations = [
  {
    id: 1,
    name: 'Unpaved Lot in Bukit Indah',
    discountRate: 5,
    location: {
      lat: 1.482337,
      lng: 103.644515,
    },
    images: [
      'https://d3mjpbzzco5v9p.cloudfront.net/40659/185504/2560x2560/185504-78903.jpeg',
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130791/2560x2560/130791-39255.jpeg',
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130792/2560x2560/130792-97138.jpeg',
    ],
    price: 600,
    storageType: ['Car Park'],
    accessTime: '24Hrs',
    size: '5 x 6',
    owner: 'JimmyH',
    ownerAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    insertedTime: '2020-10-24T17:07:06Z',
  },
  {
    id: 2,
    name: 'Self Storage Unit in Bukit Indah',
    discountRate: 0,
    location: {
      lat: 1.476811,
      lng: 103.675133,
    },
    images: [
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130791/2560x2560/130791-39255.jpeg',
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130791/2560x2560/130791-39255.jpeg',
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130791/2560x2560/130791-39255.jpeg',
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130791/2560x2560/130791-39255.jpeg',
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130791/2560x2560/130791-39255.jpeg',
    ],
    price: 900,
    storageType: ['Car Park'],
    size: '8 x 6',
    accessTime: '24Hrs',
    owner: 'Rodney',
    ownerAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    insertedTime: '2020-10-24T17:07:06Z',
  },
  {
    id: 3,
    name: 'Outdoor - Covered in Bukit Indah',
    discountRate: 5,
    location: {
      lat: 1.472143,
      lng: 103.662608,
    },
    images: [
      'https://d3mjpbzzco5v9p.cloudfront.net/24048/130792/2560x2560/130792-97138.jpeg',
    ],
    price: 880,
    storageType: ['Car Park'],
    size: '11 x 6',
    accessTime: '24Hrs',
    owner: 'Seth',
    ownerAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    insertedTime: '2020-10-24T17:07:06Z',
  },
  {
    id: 4,
    name: 'Garage in Bukit Indah',
    discountRate: 5,
    location: {
      lat: 1.491363,
      lng: 103.64047,
    },
    images: [
      'https://d3mjpbzzco5v9p.cloudfront.net/40964/186572/2560x2560/186572-18218.jpg',
    ],
    price: 500,
    storageType: ['Car Park'],
    size: '5 x 4',
    accessTime: '24Hrs',
    owner: 'Carl',
    ownerAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    insertedTime: '2020-10-24T17:07:06Z',
  },
  {
    id: 5,
    name: 'Parking Lot in Bukit Indah',
    discountRate: 5,
    location: {
      lat: 1.496889,
      lng: 103.663368,
    },
    images: [
      'https://d3mjpbzzco5v9p.cloudfront.net/3118/15530/2560x2560/15530.jpg',
    ],
    price: 900,
    storageType: ['Car Park'],
    size: '10 x 8',
    accessTime: '24Hrs',
    owner: 'Ashley',
    ownerAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    insertedTime: '2020-10-24T17:07:06Z',
  },
];
