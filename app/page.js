'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [hearts, setHearts] = useState([]);
  const [titleText, setTitleText] = useState('');
  const [showContent, setShowContent] = useState(false);

  const fullTitle = 'Maaf ya Shushu Sayang 🥺';

  useEffect(() => {
    // Typing effect for title
    let i = 0;
    const typeWriter = () => {
      if (i < fullTitle.length) {
        setTitleText(fullTitle.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => setShowContent(true), 500);
      }
    };

    setTimeout(typeWriter, 500);

    // Create floating hearts
    const createHeart = () => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 3,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 6000);
    };

    const heartInterval = setInterval(createHeart, 800);
    return () => clearInterval(heartInterval);
  }, []);

  const showMessage = () => {
    alert(
      'Yeayyy! Thank you Shushu sayang! Biya love you so much! 😘💕\n\nSekarang ayo kita plan date yang romantis! 🥰'
    );
  };

  const showSurprise = () => {
    const surprises = [
      '🍰 Biya udah pesan cake favorit chu!',
      '🌹 Bunga mawar udah di order buat chu!',
      '🎬 Movie night dengan film favorit chu!',
      '🍕 Pizza party cuma berdua kita!',
      '💆‍♀️ Massage session buat Shushu yang capek!',
      '🛍️ Shopping spree bareng di mall!',
      '☕ Coffee date di cafe aesthetic!',
      '🏖️ Weekend getaway ke pantai!',
    ];

    const randomSurprise =
      surprises[Math.floor(Math.random() * surprises.length)];
    alert(
      'Surprise! ' + randomSurprise + '\n\nPilih mana yang chu mau, sayang! 😍'
    );
  };

  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .floating-hearts {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .heart {
          position: absolute;
          font-size: 20px;
          color: rgba(255, 192, 203, 0.7);
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) rotate(360deg);
            opacity: 0;
          }
        }

        .main-card {
          max-width: 800px;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          overflow: hidden;
          position: relative;
          z-index: 10;
          animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header {
          background: linear-gradient(45deg, #ff6b9d, #ffc3e1);
          padding: 40px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          animation: float 10s infinite linear;
        }

        @keyframes float {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .header h1 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          min-height: 3rem;
        }

        .header .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 1;
        }

        .content {
          padding: 40px;
        }

        .apology-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-left: 5px solid #ff6b9d;
          opacity: ${showContent ? 1 : 0};
          transform: translateX(${showContent ? '0' : '-20px'});
          transition: all 1s ease-out;
        }

        .apology-card h2 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .apology-card p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        .promise-list {
          background: linear-gradient(135deg, #ffeaa7, #fab1a0);
          padding: 25px;
          border-radius: 15px;
          margin: 30px 0;
          opacity: ${showContent ? 1 : 0};
          transform: translateY(${showContent ? '0' : '20px'});
          transition: all 1s ease-out 0.5s;
        }

        .promise-list h3 {
          color: #d63031;
          margin-bottom: 20px;
          font-size: 1.3rem;
          text-align: center;
        }

        .promise-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding: 15px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          opacity: ${showContent ? 1 : 0};
          transform: translateX(${showContent ? '0' : '-20px'});
          transition: all 0.6s ease-out;
        }

        .promise-item::before {
          content: '💝';
          font-size: 1.5rem;
          margin-right: 15px;
        }

        .love-notes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .love-note {
          background: linear-gradient(135deg, #ffeaa7, #fab1a0);
          padding: 20px;
          border-radius: 12px;
          color: #2d3436;
          text-align: center;
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
          cursor: pointer;
          opacity: ${showContent ? 1 : 0};
          animation: ${showContent
            ? 'slideInNote 0.8s ease-out forwards'
            : 'none'};
        }

        .love-note:nth-child(even) {
          transform: rotate(2deg);
        }

        .love-note:hover {
          transform: rotate(0deg) scale(1.05);
        }

        @keyframes slideInNote {
          from {
            opacity: 0;
            transform: translateY(30px) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(-2deg);
          }
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          min-width: 200px;
          color: white;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff6b9d, #ff8a80);
          box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
        }

        .btn-secondary {
          background: linear-gradient(45deg, #74b9ff, #0984e3);
          box-shadow: 0 8px 25px rgba(116, 185, 255, 0.3);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }

        .footer {
          text-align: center;
          padding: 20px;
          background: #f8f9fa;
          color: #666;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }

          .content {
            padding: 20px;
          }

          .apology-card {
            padding: 20px;
          }

          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="container">
        {/* Floating Hearts */}
        <div className="floating-hearts">
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.left}%`,
                animationDuration: `${heart.animationDuration}s`,
              }}
            >
              💖
            </div>
          ))}
        </div>

        <div className="main-card">
          {/* Header */}
          <div className="header">
            <h1>{titleText}</h1>
            <p className="subtitle">
              Dari yang lagi nyesel banget karena udah bikin chu badmood
            </p>
          </div>

          {/* Content */}
          <div className="content">
            {/* Main Apology */}
            <div className="apology-card">
              <h2>Biya tahu Biya salah...</h2>
              <p>
                Shushu sayang, Biya bener-bener minta maaf banget. Waktu kita
                makan kemarin, Biya terlalu fokus sama pekerjaan sampai Biya
                cuek sama chu. Biya tahu chu udah cape dan pengen quality time
                sama Biya, tapi malah Biya bikin chu badmood.
              </p>
              <p>
                Biya sadar banget kalau sikap Biya kemarin itu salah. chu lebih
                penting dari pekerjaan apapun, dan Biya harusnya kasih perhatian
                penuh waktu kita lagi berduaan. Maafin Biya ya sayang 😭
              </p>
            </div>

            {/* Promises */}
            <div className="promise-list">
              <h3>Janji-janji Biya ke Shushu:</h3>
              <div className="promise-item">
                <span>
                  Mulai sekarang, pas lagi makan bareng, HP Biya bakal Biya
                  simpen jauh-jauh
                </span>
              </div>
              <div className="promise-item">
                <span>
                  Biya bakal kasih perhatian penuh ke chu pas quality time
                </span>
              </div>
              <div className="promise-item">
                <span>
                  Kalau lagi ada pekerjaan urgent, Biya bakal bilang dulu sama
                  chu
                </span>
              </div>
              <div className="promise-item">
                <span>
                  Biya bakal lebih appreciative sama effort chu buat Biya
                </span>
              </div>
            </div>

            {/* Love Notes */}
            <div className="love-notes">
              <div className="love-note">
                <h4
                  style={{
                    marginBottom: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                >
                  💕 Fun Fact
                </h4>
                <p>Shushu itu lebih penting dari deadline manapun!</p>
              </div>
              <div className="love-note">
                <h4
                  style={{
                    marginBottom: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                >
                  🌟 Daily Reminder
                </h4>
                <p>Shushu adalah prioritas nomor 1 dalam hidup Biya</p>
              </div>
              <div className="love-note">
                <h4
                  style={{
                    marginBottom: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                >
                  💌 Love Note
                </h4>
                <p>Maaf udah bikin chu sedih, sayang. I love you so much!</p>
              </div>
            </div>

            {/* Final Apology */}
            <div className="apology-card">
              <h2>Sebagai permintaan maaf...</h2>
              <p>
                Biya mau treat chu makan di tempat favorit chu, dan kali ini
                Biya janji bakal focus 100% sama chu. Gak ada gangguan
                pekerjaan, gak ada HP, cuma kita berdua aja.
              </p>
              <p>
                Shushu, chu tuh orang yang paling berharga dalam hidup Biya.
                Biya gak mau kehilangan chu gara-gara sikap stupid Biya. Please
                give me another chance ya? 🥺
              </p>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className="btn btn-primary"
                onClick={showMessage}
              >
                Biya Maafin chu! 💕
              </button>
              <button
                className="btn btn-secondary"
                onClick={showSurprise}
              >
                Surprise untuk Shushu! 🎁
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <p>Made with lots of love and regret for my beloved Shushu 💝</p>
          </div>
        </div>
      </div>
    </>
  );
}
