import { useQuery, gql } from '@apollo/client';
import { Layout, Products } from './components';
import { Route, Routes } from 'react-router-dom';

import { Root } from './interface/barcode-interface';
import Loader from './components/screens/loader/Loader';

const GET_DATA = gql`
  query Barcode {
    barcode(id: 365) {
      id
      barcodeValue
      title
      description
      deleted
      sellingPrice
      slug
      archived
      createdAt
      mute
      discountedPrice
      cost
      tags
      characteristic
      category {
        id
        name
        slug
        icon
        icon1
        isActive
        prioritization
        inTrend
        lft
        rght
        treeId
        level
        parent {
          id
          name
          slug
          icon
          icon1
          isActive
          prioritization
          inTrend
          lft
          rght
          treeId
          level
        }
      }
      images {
        id
        url
      }
      sizes {
        edges {
          node {
            id
            name
            value
          }
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery<Root>(GET_DATA);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout data={data} error={error} loading={loading}>
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Products data={data} error={error} loading={loading} />
                }
              />
            </Routes>
          </div>
        </Layout>
      )}
    </>
  );
}
