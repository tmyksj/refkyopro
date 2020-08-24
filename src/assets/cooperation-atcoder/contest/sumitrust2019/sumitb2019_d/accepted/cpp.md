# 三井住友信託銀行プログラミングコンテスト2019
## D - Lucky PIN
```cpp
#include <iostream>
#include <set>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    set<int> d1, d2, d3;
    for (int i = 0; i < n; i++) {
        for (set<int>::iterator j = d2.begin(); j != d2.end(); j++) {
            d3.insert(10 * *j + (s[i] - '0'));
        }
        for (set<int>::iterator j = d1.begin(); j != d1.end(); j++) {
            d2.insert(10 * *j + (s[i] - '0'));
        }
        d1.insert(s[i] - '0');
    }

    cout << d3.size() << endl;
}
```
