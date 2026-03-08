class Solution {
public:
    string longestNiceSubstring(string s) {
        int n = s.length();
        string ans = "";
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                string t = s.substr(i, j - i + 1);
                set<char> st;
                for (char c: t) st.insert(c);
                bool ok = true;
                for (char c: t) {
                    if (isupper(c)) {
                        if (!st.count(tolower(c))) {
                            ok = false;
                            break;
                        }
                    } else {
                        if (!st.count(toupper(c))) {
                            ok = false;
                            break;
                        }
                    }
                }
                if (ok && t.length() > ans.length()) ans = t;
            }
        }
        return ans;
    }