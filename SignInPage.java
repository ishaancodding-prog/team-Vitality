import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SignInPage extends JFrame {
    
    private JTextField emailField;
    private JPasswordField passwordField;

    public SignInPage() {
        // Frame Configuration
        setTitle("Team Vitality - Sign In");
        setSize(420, 520);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);

        // Main Panel with Gradient Background simulation
        JPanel mainPanel = new JPanel();
        mainPanel.setBackground(new Color(3, 7, 18)); // Deep Slate #030712
        mainPanel.setLayout(null);

        // Title Label
        JLabel titleLabel = new JLabel("Welcome Back");
        titleLabel.setForeground(Color.WHITE);
        titleLabel.setFont(new Font("Plus Jakarta Sans", Font.BOLD, 26));
        titleLabel.setBounds(50, 40, 300, 35);
        mainPanel.add(titleLabel);

        // Subtitle Label
        JLabel subtitleLabel = new JLabel("Sign in to your ABTalks 60-Day Hub");
        subtitleLabel.setForeground(new Color(148, 163, 184)); // Slate-400
        subtitleLabel.setFont(new Font("Plus Jakarta Sans", Font.PLAIN, 13));
        subtitleLabel.setBounds(50, 75, 300, 20);
        mainPanel.add(subtitleLabel);

        // Email Label & Field
        JLabel emailLabel = new JLabel("COLLEGE EMAIL");
        emailLabel.setForeground(new Color(34, 211, 238)); // Cyan-400
        emailLabel.setFont(new Font("Plus Jakarta Sans", Font.BOLD, 11));
        emailLabel.setBounds(50, 130, 300, 20);
        mainPanel.add(emailLabel);

        emailField = new JTextField();
        emailField.setBounds(50, 155, 305, 45);
        emailField.setBackground(new Color(15, 23, 42)); // Slate-900
        emailField.setForeground(Color.WHITE);
        emailField.setCaretColor(Color.WHITE);
        emailField.setFont(new Font("Plus Jakarta Sans", Font.PLAIN, 14));
        emailField.setBorder(BorderFactory.createLineBorder(new Color(30, 41, 59), 2));
        mainPanel.add(emailField);

        // Password Label & Field
        JLabel passwordLabel = new JLabel("PASSWORD");
        passwordLabel.setForeground(new Color(34, 211, 238));
        passwordLabel.setFont(new Font("Plus Jakarta Sans", Font.BOLD, 11));
        passwordLabel.setBounds(50, 220, 300, 20);
        mainPanel.add(passwordLabel);

        passwordField = new JPasswordField();
        passwordField.setBounds(50, 245, 305, 45);
        passwordField.setBackground(new Color(15, 23, 42));
        passwordField.setForeground(Color.WHITE);
        passwordField.setCaretColor(Color.WHITE);
        passwordField.setFont(new Font("Plus Jakarta Sans", Font.PLAIN, 14));
        passwordField.setBorder(BorderFactory.createLineBorder(new Color(30, 41, 59), 2));
        mainPanel.add(passwordField);

        // Sign In Button
        JButton signInButton = new JButton("Sign In 🚀");
        signInButton.setBounds(50, 325, 305, 45);
        signInButton.setBackground(new Color(6, 182, 212)); // Cyan-500
        signInButton.setForeground(new Color(3, 7, 18));
        signInButton.setFont(new Font("Plus Jakarta Sans", Font.BOLD, 14));
        signInButton.setFocusPainted(false);
        signInButton.setBorder(null);
        signInButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
        
        // Button Action Event
        signInButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String email = emailField.getText().trim();
                String password = new String(passwordField.getPassword());

                if (email.isEmpty() || password.isEmpty()) {
                    JOptionPane.showMessageDialog(null, "Please fill in all fields!", "Error", JOptionPane.ERROR_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(null, "Welcome back, " + email + "! Sign-in successful.", "Success", JOptionPane.INFORMATION_MESSAGE);
                }
            }
        });
        mainPanel.add(signInButton);

        // Footer Brand Note
        JLabel footerLabel = new JLabel("Made by Team : Vitality");
        footerLabel.setForeground(new Color(100, 116, 139));
        footerLabel.setFont(new Font("Plus Jakarta Sans", Font.PLAIN, 11));
        footerLabel.setHorizontalAlignment(SwingConstants.CENTER);
        footerLabel.setBounds(50, 415, 305, 20);
        mainPanel.add(footerLabel);

        add(mainPanel);
    }

    public static void main(String[] args) {
        // Run look and feel settings
        try {
            UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());
        } catch (Exception ignored) {}

        SwingUtilities.invokeLater(() -> {
            new SignInPage().setVisible(true);
        });
    }
}
