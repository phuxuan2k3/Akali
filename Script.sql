-- Create the tables
CREATE TABLE business_manager (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    email VARCHAR(100) UNIQUE NOT NULL,
    accountID INT NOT NULL
);

CREATE TABLE candidate (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address VARCHAR(255),
    accountID INT NOT NULL
);

-- Insert 10 records into business_manager
INSERT INTO business_manager (name, image, email, accountID) VALUES
('Alice Smith', 'https://example.com/image1.jpg', 'alice.smith@example.com', 101),
('Bob Johnson', 'https://example.com/image2.jpg', 'bob.johnson@example.com', 102),
('Cathy Brown', 'https://example.com/image3.jpg', 'cathy.brown@example.com', 103),
('David Wilson', 'https://example.com/image4.jpg', 'david.wilson@example.com', 104),
('Eva Davis', 'https://example.com/image5.jpg', 'eva.davis@example.com', 105),
('Frank Moore', 'https://example.com/image6.jpg', 'frank.moore@example.com', 106),
('Grace Taylor', 'https://example.com/image7.jpg', 'grace.taylor@example.com', 107),
('Hank White', 'https://example.com/image8.jpg', 'hank.white@example.com', 108),
('Ivy Hall', 'https://example.com/image9.jpg', 'ivy.hall@example.com', 109),
('Jack Lee', 'https://example.com/image10.jpg', 'jack.lee@example.com', 110);

-- Insert 10 records into candidate
INSERT INTO candidate (name, image, email, phone, address, accountID) VALUES
('Anna Green', 'https://example.com/candidate1.jpg', 'anna.green@example.com', '555-1234', '123 Elm St', 201),
('Ben Adams', 'https://example.com/candidate2.jpg', 'ben.adams@example.com', '555-5678', '456 Oak St', 202),
('Chloe Scott', 'https://example.com/candidate3.jpg', 'chloe.scott@example.com', '555-8765', '789 Pine St', 203),
('Daniel Clark', 'https://example.com/candidate4.jpg', 'daniel.clark@example.com', '555-4321', '101 Maple St', 204),
('Ella Lewis', 'https://example.com/candidate5.jpg', 'ella.lewis@example.com', '555-2222', '202 Birch St', 205),
('Finn Harris', 'https://example.com/candidate6.jpg', 'finn.harris@example.com', '555-3333', '303 Cedar St', 206),
('Grace Martin', 'https://example.com/candidate7.jpg', 'grace.martin@example.com', '555-4444', '404 Spruce St', 207),
('Henry King', 'https://example.com/candidate8.jpg', 'henry.king@example.com', '555-5555', '505 Ash St', 208),
('Isla Wright', 'https://example.com/candidate9.jpg', 'isla.wright@example.com', '555-6666', '606 Willow St', 209),
('Jack Turner', 'https://example.com/candidate10.jpg', 'jack.turner@example.com', '555-7777', '707 Poplar St', 210);
