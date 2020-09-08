import React from 'react';
import Container from 'react-bootstrap/Container';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './breadcrumb.styles.css';

function CurrentPath () {
  let location = useLocation();
  let currentPath = location.pathname.substring(1);

  if (currentPath === '') {
    return (
      <div className="text-secondary">Inicio</div>
    )
  } else {
    let currentSubPath = currentPath.split("/");
    return (
      <div className="text-secondary">
        <Link to="/">Inicio</Link>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-2" />
        <div className="d-inline-block">
          {currentSubPath.map(function(category, index) {
            if (index < currentSubPath.length - 1) {
              return (
                <span className="d-inline-block" key={category + index}>
                  <Link to={ '/' + category }>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                  <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-2" />
                </span>
              )
            } else {
              return (
                <span className="d-inline-block" key={category + index}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

const Breadcrumb = () => (
  <div className="breadcrumb bg-light">
    <Container>
      <CurrentPath />
    </Container>
  </div>
)

export default Breadcrumb;