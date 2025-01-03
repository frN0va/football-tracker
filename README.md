# Football Tracker
A web application for tracking football recruiting updates, transfers, commitments, and visits. Built with Node.js, Express, MongoDB, and vanilla JavaScript.

## Features
- Track player commitments, transfers, visits, and offers
- Display detailed player information including stats, grades, and social media links
- Filter updates by type (Transfer Portal, HS Commitment, Visit, Offer)
- Dark/Light theme support
- Mobile-responsive design
- Admin interface for managing player data

## Prerequisites
- Node.js (v12 or higher)
- MongoDB database
- npm or yarn package manager

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/football-tracker.git
cd football-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
ADMIN_TOKEN=your_admin_password
```

4. Start the server:
```bash
npm start
```
The application will be available at `http://localhost:3000`

## Usage
### Public Access
- View all player updates
- Filter updates by type
- View player details and social media links
- Toggle between light and dark themes

### Admin Access
To access admin features:
1. Click the "Admin Login" button
2. Enter your admin password (set in .env file)
3. Once logged in, you can:
- Add new players
- Delete existing players

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

## Acknowledgments
- Icons provided by [Lucide Icons](https://lucide.dev/)