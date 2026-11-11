# Kampüs Etkinlik Rehberi — Express REST API (Sprint 7)

Bu servis, Kampüs Etkinlik Rehberi frontend uygulamasının bağlanacağı Node.js + Express tabanlı REST API backend servisidir.

## Öğrenci Bilgileri
* **Adı Soyadı:** Emir Demir
* **Öğrenci Numarası:** 2416501048
* **Bölüm:** Bilgisayar Mühendisliği

---

## Kurulum ve Çalıştırma

Gereksinimler: **Node.js 18+** ve **npm**

```bash
# Backend klasörüne geçin
cd backend

# Bağımlılıkları yükleyin
npm install

# Geliştirme modunda başlatın (nodemon ile otomatik yenileme)
npm run dev

# Üretim modunda başlatın
npm start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

---

## Ortam Değişkenleri (.env)

`backend/.env.example` dosyasını referans alarak bir `.env` dosyası oluşturun:

```env
PORT=3000
STUDENT_ID=2416501048
```

> **Önemli:** `.env` ve `node_modules` dosyaları `.gitignore` ile korunmakta olup kesinlikle GitHub'a gönderilmemelidir.

---

## REST Sözleşmesi

| Method | Yol (Path) | Açıklama | Başarılı Durum Kodu | Gövde (Body) / Parametre |
|---|---|---|---|---|
| `GET` | `/health` | Sağlık kontrolü ve öğrenci no | `200 OK` | - |
| `GET` | `/events` | Tüm etkinlikler (kategoriye göre filtreleme: `?category=Atölye`) | `200 OK` | Query: `category` (opsiyonel) |
| `GET` | `/events/:id` | Tek etkinlik detayı (bulunamazsa `404`) | `200 OK` | Parametre: `:id` |
| `POST` | `/events` | Yeni etkinlik ekleme (eksik alanda `400`) | `201 Created` | JSON Body: `title`, `category`, `capacity`, `date`, `time`, `location`, `description` |

### Örnek Hata Formatı (400 / 404)
```json
{
  "error": {
    "message": "Event not found"
  }
}
```

---

## Postman Testleri

Hazır Postman koleksiyonu `backend/requests/kampus-api.json` yolunda bulunmaktadır.

Koleksiyon içindeki 6 test isteği:
1. `GET http://localhost:3000/health` (200 OK)
2. `GET http://localhost:3000/events` (200 OK)
3. `GET http://localhost:3000/events/event-2` (200 OK)
4. `GET http://localhost:3000/events/yok` (404 Not Found)
5. `POST http://localhost:3000/events` (tam body - 201 Created)
6. `POST http://localhost:3000/events` (eksik body - 400 Bad Request)
