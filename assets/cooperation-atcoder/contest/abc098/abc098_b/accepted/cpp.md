# AtCoder Beginner Contest 098
## B - Cut and Count
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    vector<int> l(26, 0), r(26, 0);
    for (int i = 0; i < n; i++) {
        if (i == 0) {
            l[s[i] - 'a']++;
        } else {
            r[s[i] - 'a']++;
        }
    }

    int res = 0;
    for (int i = 1; i < n; i++) {
        int cnt = 0;
        for (int j = 0; j < 26; j++) {
            if (l[j] > 0 && r[j] > 0) {
                cnt++;
            }
        }

        if (res < cnt) {
            res = cnt;
        }

        l[s[i] - 'a']++;
        r[s[i] - 'a']--;
    }

    cout << res << endl;
}
```
