/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.HeroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.left-Content {
  flex: 1;
  min-width: 300px;
  margin-right: 20px;
}

.left-Content h2 {
  font-size: 2.5rem;
  color: #333;
}

.left-Content p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.click {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.click:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.click svg {
  font-size: 2rem;
  color: #007bff;
}

.click p {
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
}

.right {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.right img {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-top: 70px;
  transition: transform 0.1s ease-out;
}

.extra {
  margin-top: 40px;
  text-align: center;
}

.extra h3 {
  font-size: 1.5rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.extra h3 svg {
  margin-left: 10px;
}

.imp {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.imp h5 {
  font-size: 1rem;
  color: #007bff;
}

.imp h5 a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.imp h5 a svg {
  margin-left: 5px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left-Content {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .left-Content h2 {
    font-size: 2rem;
  }

  .left-Content p {
    font-size: 1rem;
  }

  .container {
    justify-content: center;
  }

  .click {
    width: 100px;
    height: 100px;
  }

  .click svg {
    font-size: 1.5rem;
  }

  .click p {
    font-size: 0.9rem;
  }

  .right img {
    margin-top: 40px;
  }

  .extra h3 {
    font-size: 1.2rem;
  }

  .imp {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .left-Content h2 {
    font-size: 1.8rem;
  }

  .left-Content p {
    font-size: 0.9rem;
  }

  .click {
    width: 80px;
    height: 80px;
  }

  .click svg {
    font-size: 1.2rem;
  }

  .click p {
    font-size: 0.8rem;
  }

  .extra h3 {
    font-size: 1rem;
  }

  .imp h5 {
    font-size: 0.9rem;
  }
}
