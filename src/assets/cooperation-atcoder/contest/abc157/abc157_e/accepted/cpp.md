# AtCoder Beginner Contest 157
## E - Simple String Queries
```cpp
#include <iostream>
#include <set>
#include <string>
#include <vector>

using namespace std;

int main() {
    cin.tie(0);
    ios::sync_with_stdio(false);

    int n;
    string s;
    cin >> n >> s;

    vector<set<int>> b(26, set<int>());
    for (int i = 0; i < n; i++) {
        b[s[i] - 'a'].insert(i);
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        int qi;
        cin >> qi;

        if (qi == 1) {
            int iq;
            char cq;
            cin >> iq >> cq;
            iq--;

            for (int j = 0; j < 26; j++) {
                b[j].erase(iq);
            }
            b[cq - 'a'].insert(iq);
        } else {
            int lq, rq;
            cin >> lq >> rq;
            lq--;
            rq--;

            int res = 0;
            for (int j = 0; j < 26; j++) {
                set<int>::iterator l = b[j].lower_bound(lq);
                set<int>::iterator r = b[j].upper_bound(rq);
                if (l != r) {
                    res++;
                }
            }

            cout << res << endl;
        }
    }
}
```
