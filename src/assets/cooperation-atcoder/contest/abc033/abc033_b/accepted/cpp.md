# AtCoder Beginner Contest 033
## B - 町の合併
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> s(n);
    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i] >> p[i];
    }

    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += p[i];
    }

    string res = "atcoder";
    for (int i = 0; i < n; i++) {
        if (p[i] > sum / 2) {
            res = s[i];
        }
    }

    cout << res << endl;
}
```
