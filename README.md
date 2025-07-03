Diagnostikare Frontend Technical Challenge

## This project is a technical solution for the frontend challenge using Next.js 14 (App Router), TypeScript, TailwindCSS, and ShadCN UI.

### FEATURES
- User list with avatar, full name and email.
- Pagination support from the API.
- Client-side search by name or last name.
- Fully responsive layout (mobile-first).
- Dynamic route for user detail (/user/[id]).
- Error handling for not found users.
- UI loading skeletons while fetching data.
- Unit & integration tests with Jest and Testing Library.

### TECH STACK
- Framework: Next.js 15 (App Router)
- Styling: TailwindCSS + ShadCN UI
- HTTP Client: Axios
- Testing: Jest, Testing Library
- Language: TypeScript

### HOW TO RUN LOCALLY
#### 1. Clone the repository:
```
git clone https://github.com/your-username/dk-test.git
cd dk-test
```
   

#### 2. Install dependencies:
```
npm install
```

#### 3. Run the development server:
```
npm run dev
```

#### 4. Run tests:
```
npm run test
```

### TESTING COVERAGE
The following tests were implemented:
- UserList.test.tsx: renders users and displays their data.
- UserSearch.test.tsx: filters the list based on search input.
- UserDetailClient.test.tsx: renders user info given an ID (mocked).
- Integration tests for search + list.

### AUTHOR

* Carlos Aldair Guevara

Email: 
* carlosgs125@gmail.com

DEPLOYED VERSION

You can view the live version here:

* https://dk-test-sage.vercel.app/
