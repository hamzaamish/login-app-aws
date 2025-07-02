import React, { useState, useEffect } from 'react';

const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('dashboard');
  };

  return (
    <div className="auth-form">
      <div className="form-header">
        <h2 className="form-title">Welcome Back</h2>
        <p className="form-subtitle">Sign in to your Earthora account</p>
      </div>
      <div className="space-y-6">
        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modern-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="modern-input"
          />
        </div>
        <button onClick={handleSubmit} className="primary-btn">
          <span>Sign In</span>
          <div className="btn-glow"></div>
        </button>
      </div>
    </div>
  );
};

const Register = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('dashboard');
  };

  return (
    <div className="auth-form">
      <div className="form-header">
        <h2 className="form-title">Join Earthora</h2>
        <p className="form-subtitle">Create your account and start your journey</p>
      </div>
      <div className="space-y-4">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="modern-input"
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="modern-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="modern-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="modern-input"
          />
        </div>
        <button onClick={handleSubmit} className="primary-btn">
          <span>Create Account</span>
          <div className="btn-glow"></div>
        </button>
      </div>
    </div>
  );
};

const Dashboard = ({ onNavigate }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Welcome to Earthora</h2>
        <button onClick={() => onNavigate('login')} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Analytics</h3>
          <p className="card-text">Track your environmental impact with real-time data and insights</p>
          <div className="card-progress">
            <div className="progress-bar" style={{width: '75%'}}></div>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">🌱</div>
          <h3>Projects</h3>
          <p className="card-text">Manage and discover sustainability projects in your community</p>
          <div className="card-progress">
            <div className="progress-bar" style={{width: '60%'}}></div>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">🌍</div>
          <h3>Community</h3>
          <p className="card-text">Connect with eco-warriors and share your journey</p>
          <div className="card-progress">
            <div className="progress-bar" style={{width: '90%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="particles-container">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            '--random-x': `${(Math.random() - 0.5) * 200}px`
          }}
        />
      ))}
    </div>
  );
};

const Navigation = ({ currentPage, onNavigate }) => {
  return (
    <nav className="modern-nav">
      <button 
        onClick={() => onNavigate('login')}
        className={`nav-link ${currentPage === 'login' ? 'active' : ''}`}
      >
        Login
      </button>
      <span className="nav-separator">•</span>
      <button 
        onClick={() => onNavigate('register')}
        className={`nav-link ${currentPage === 'register' ? 'active' : ''}`}
      >
        Register
      </button>
    </nav>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'register':
        return <Register onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      default:
        return <Login onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      <FloatingParticles />
      
      {/* Dynamic background elements */}
      <div className="bg-gradient-1"></div>
      <div className="bg-gradient-2"></div>
      <div className="bg-gradient-3"></div>
      <div className="neural-network">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`neural-node node-${i + 1}`}></div>
        ))}
      </div>
      
      <div className={`main-container ${mounted ? 'mounted' : ''}`}>
        <div className="glass-container">
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo-ring">
                <div className="logo-inner">
                  <span className="logo-text">E</span>
                </div>
                <div className="orbit-ring">
                  <div className="orbit-dot"></div>
                </div>
              </div>
            </div>
            <h1 className="brand-title">
              Earth<span className="brand-accent">ora</span>
            </h1>
            <p className="brand-tagline">Pioneering Sustainable Innovation</p>
          </div>
          
          {currentPage !== 'dashboard' && (
            <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          )}
          
          <div className="content-area">
            {renderCurrentPage()}
          </div>
        </div>
      </div>
    </div>
  );
}
