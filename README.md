# Query Management System

## Overview
The **Query Management System** is a Reddit-like doubt posting platform designed for university courses. It allows students to post doubts, which are automatically assigned to a **Teaching Assistant (TA)** based on the topic. If the TA cannot resolve the doubt within a specified time, it is escalated to the **faculty**. Other students can also participate by commenting on doubts, fostering collaborative learning.

## Features
- **Doubt Posting**: Students can post doubts under a specific course.
- **Automated TA Assignment**: Doubts are categorized and assigned to a TA based on the topic.
- **Escalation System**: If a TA fails to resolve the doubt within the given time, it is escalated to the faculty.
- **Student Interaction**: Other students can comment on doubts, providing peer-to-peer support.
- **Single Chat Container**: All interactions related to a doubt happen within the same thread.
- **Tagging System**: Similar doubts are tagged for easy reference.

## User Roles
1. **Student**
   - Posts doubts in the system.
   - Can comment on other doubts.
2. **Teaching Assistant (TA)**
   - Assigned doubts based on topics.
   - Resolves doubts or escalates them to faculty if unable to solve within a given time.
3. **Faculty**
   - Handles escalated doubts.
   - Monitors system activity and ensures smooth doubt resolution.

## Workflow
1. A student posts a doubt under a course.
2. The system categorizes the doubt and assigns it to the appropriate TA.
3. The TA resolves the doubt or escalates it if unable to solve within the given time.
4. Other students can comment on the doubt to contribute to the discussion.
5. Once resolved, the doubt thread is marked as closed.

## Tech Stack
- **Frontend**: React (with Vite)
- **Backend**: Django
- **Database**: Supabase Cloud database (PostgreSQL)
- **Authentication**: Basic

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/query-management-system.git
   ```
2. Navigate to the project folder:
   ```bash
   cd query-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Contribution
Feel free to contribute by creating issues or submitting pull requests. We welcome feedback and suggestions to improve the system!

## License
This project is licensed under the MIT License.


# Django Backend Setup

## Prerequisites
- Python 3.x
- pip
- virtualenv

## Installation

### 1. Create virtual environment
```bash
virtualenv env
```
### 2. Activate virtual environment
```
 env\Scripts\activate

```
### 2) cd to backend folder and run the following command to install all the dependencies-
```
pip install -r requirements.txt

```
### 3) cd to oops folder and then run the following command to start the server-
```
python manage.py runserver

```
