# AtCoder Beginner Contest 149
## C - Next Prime
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 1000000;

    vector<bool> prime(n, true);
    prime[0] = prime[1] = false;
    for (int i = 2; i < n; i++) {
        if (prime[i]) {
            for (int j = 2 * i; j < n; j += i) {
                prime[j] = false;
            }
        }
    }

    int x;
    cin >> x;

    int res = -1;
    for (int i = x; i < n; i++) {
        if (prime[i]) {
            res = i;
            break;
        }
    }

    cout << res << endl;
}
```
